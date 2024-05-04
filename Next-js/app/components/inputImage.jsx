import { useRef, useState } from "react";

const elStyle = {
	root: {
		position: "relative",
		width: "7em",
		height: "7em",
		borderRadius: "50%",
		background: "gray",
		cursor: "pointer",
      overflow: "hidden",
	},
	input: {
		display: "none",
	},
	img: {
		position: "absolute",
		top: "0",
		left: "0",
		borderRadius: "50%",
		objectFit: "cover",
		width: "inherit",
		height: "inherit",
	},
	hidden: {
		display: "none",
	},
	span: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
};

const InputImage = ({
	name,
   style = Object,
	children = null,
	fallbackImagePreview = null,
	...res
}) => {
	const inputRef = useRef();
	const [imgInput, setImgInput] = useState(null);

	const handdleChange = (e) => {
		const file = e.target.files[0];

      if (file != undefined) {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => setImgInput(reader.result);
      }
	};

	return (
		<div style={{...elStyle.root, ...style}} onClick={() => inputRef.current.click()} {...res}>
			<span style={imgInput ? elStyle.hidden : elStyle.span}>{children}</span>

			<input
				onChange={handdleChange}
				style={elStyle.input}
				type="file"
				ref={inputRef}
				name={name}
				accept=".png,.jpg,.jpeg,.webp"
			/>

			<img
				src={imgInput ? imgInput : ""}
				style={imgInput ? elStyle.img : elStyle.hidden}
            onClick={() => setImgInput(null)}
			/>
		</div>
	);
};

export default InputImage;
