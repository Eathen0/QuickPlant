import { AnimatePresence, m } from "framer-motion";
import React from "react";

const Popup = ({ title, description, showHideState, whenYesCallback }) => {
	const [show, setShow] = showHideState;

	return (
		<AnimatePresence mode="popLayout">
			{show && (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100vh",
						zIndex: "9999",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div style={{position: 'absolute', width: '100%', height: '100vh'}} onClick={() => setShow(false)} />
					<m.div
						initial={{ translateY: "-5vh" }}
						animate={{ translateY: 0 }}
						exit={{ translateY: "-5vh" }}
						style={{
                     zIndex: "9999",
							backgroundColor: "white",
							padding: "20px",
							borderRadius: "10px",
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
						}}
					>
						<h2 style={{ textAlign: "center" }}>{title}</h2>
						<p style={{ textAlign: "center" }}>{description}</p>
						<div
							style={{
								display: "flex",
								gap: "1rem",
								justifyContent: "space-evenly",
								marginTop: "1rem",
							}}
						>
							<button
								className="btn btn-danger"
								onClick={() => {
                           setShow(false);
                           whenYesCallback instanceof Function && whenYesCallback();
                        }}
							>
								Ya
							</button>
							<button
								className="btn btn-success"
								onClick={() => {
									setShow(false);
								}}
							>
								Tidak
							</button>
						</div>
					</m.div>
				</m.div>
			)}
		</AnimatePresence>
	);
};

export default Popup;
