import Link from "next/link";

const NotFound = () => {
	return (
		<main
			style={{
				fontSize: "clamp(14pt, 1.5vw, 15pt)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
			}}
		>
			<h1
				style={{
					fontSize: "7em",
					color: "transparent",
					textAlign: "center",
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					backgroundImage: "linear-gradient(#0029FF, #ABF0FF)",
				}}
			>
				404
			</h1>
         <h3>Maaf, halaman yang Anda cari tidak ada.</h3>
         <br />
			<div>
				<span>Kembali ke halaman utama </span>
				<Link 
               href='/home'
               style={{
                  padding: "0.2em 0.7em",
                  borderRadius: "0.5em",
                  border: "2px solid #0029FF",
               }}
            >
               Home
            </Link>
			</div>
		</main>
	);
};

export default NotFound;
