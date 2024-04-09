const Icons = {
	twitter: ({ width, height, color = "black" }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.5375 0.0213623H19.758L12.723 8.38991L21 19.7795H14.52L9.441 12.8732L3.636 19.7795H0.4125L7.9365 10.8254L0 0.0229195H6.645L11.229 6.33437L16.5375 0.0213623ZM15.405 17.7738H17.19L5.67 1.92274H3.756L15.405 17.7738Z"
				fill={color}
			/>
		</svg>
	),
	facebook: ({ width, height }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_484_138)">
				<path
					d="M21 10.5C21 4.70105 16.299 0 10.5 0C4.70105 0 0 4.70105 0 10.5C0 15.7408 3.83972 20.0848 8.85938 20.8724V13.5352H6.19336V10.5H8.85938V8.18672C8.85938 5.55516 10.427 4.10156 12.8254 4.10156C13.9742 4.10156 15.1758 4.30664 15.1758 4.30664V6.89062H13.8518C12.5474 6.89062 12.1406 7.70003 12.1406 8.53043V10.5H15.0527L14.5872 13.5352H12.1406V20.8724C17.1603 20.0848 21 15.7409 21 10.5Z"
					fill="#1877F2"
				/>
				<path
					d="M14.5872 13.5352L15.0527 10.5H12.1406V8.53043C12.1406 7.69995 12.5474 6.89062 13.8518 6.89062H15.1758V4.30664C15.1758 4.30664 13.9742 4.10156 12.8253 4.10156C10.427 4.10156 8.85938 5.55516 8.85938 8.18672V10.5H6.19336V13.5352H8.85938V20.8724C9.40211 20.9575 9.95064 21.0001 10.5 21C11.0494 21.0002 11.5979 20.9575 12.1406 20.8724V13.5352H14.5872Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_484_138">
					<rect width={width} height={height} fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	tiktok: ({ width, height }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 19 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_484_141)">
				<path
					d="M14.0809 7.56151C15.4671 8.52787 17.1654 9.09647 18.9996 9.09647V5.65464C18.6524 5.65471 18.3062 5.61937 17.9666 5.5492V8.25842C16.1326 8.25842 14.4345 7.6899 13.048 6.72361V13.7475C13.048 17.2612 10.127 20.1094 6.52415 20.1094C5.17983 20.1094 3.93028 19.7131 2.89233 19.0333C4.07701 20.2146 5.72912 20.9473 7.55683 20.9473C11.16 20.9473 14.081 18.0992 14.081 14.5853V7.56151H14.0809ZM15.3552 4.08912C14.6467 3.33436 14.1815 2.35894 14.0809 1.28056V0.837891H13.102C13.3484 2.20847 14.1889 3.3794 15.3552 4.08912ZM5.17115 16.337C4.77533 15.831 4.56137 15.2118 4.56233 14.5752C4.56233 12.9682 5.89834 11.6652 7.54667 11.6652C7.8538 11.665 8.15912 11.711 8.45191 11.8016V8.28275C8.10976 8.23706 7.7645 8.21758 7.41938 8.22475V10.9636C7.12646 10.873 6.82097 10.827 6.51369 10.8273C4.86544 10.8273 3.5295 12.1302 3.5295 13.7374C3.5295 14.8739 4.19725 15.8577 5.17115 16.337Z"
					fill="#FF004F"
				/>
				<path
					d="M13.0479 6.72354C14.4346 7.68983 16.1325 8.25835 17.9666 8.25835V5.54913C16.9428 5.33645 16.0365 4.81478 15.3551 4.08913C14.1888 3.37933 13.3484 2.20839 13.102 0.837891H10.5308V14.5851C10.5249 16.1878 9.19123 17.4855 7.54647 17.4855C6.57732 17.4855 5.71624 17.035 5.17095 16.337C4.1972 15.8577 3.52938 14.8738 3.52938 13.7375C3.52938 12.1304 4.86532 10.8274 6.51357 10.8274C6.82937 10.8274 7.13374 10.8753 7.41926 10.9637V8.22482C3.87962 8.29615 1.03296 11.1165 1.03296 14.5852C1.03296 16.3168 1.74182 17.8865 2.89236 19.0334C3.93031 19.7131 5.17978 20.1095 6.52418 20.1095C10.1271 20.1095 13.048 17.2611 13.048 13.7475L13.0479 6.72354Z"
					fill="black"
				/>
				<path
					d="M17.9665 5.54907V4.81668C17.0433 4.81804 16.1383 4.56592 15.355 4.08913C16.0484 4.82936 16.9614 5.33982 17.9665 5.54921M13.1018 0.837828C13.0783 0.706875 13.0603 0.575046 13.0478 0.442666V0H9.49763V13.7474C9.49198 15.3499 8.15827 16.6476 6.51344 16.6476C6.04714 16.6482 5.58722 16.5419 5.17082 16.3371C5.71611 17.035 6.57719 17.4854 7.54634 17.4854C9.19103 17.4854 10.5249 16.1879 10.5307 14.5852V0.8379L13.1018 0.837828ZM7.41935 8.22476V7.44493C7.12269 7.40537 6.82362 7.38558 6.5242 7.3857C2.92088 7.3857 0 10.234 0 13.7474C0 15.9502 1.14794 17.8914 2.89238 19.0333C1.74184 17.8864 1.03298 16.3166 1.03298 14.5852C1.03298 11.1165 3.87956 8.29609 7.41935 8.22476Z"
					fill="#00F2EA"
				/>
			</g>
			<defs>
				<clipPath id="clip0_484_141">
					<rect width={width} height={height} fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	github: ({ width, height }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_484_151)">
				<path
					d="M11 0.259888C4.9225 0.259888 0 4.96126 0 10.7599C0 15.4 3.1515 19.3349 7.52125 20.7218C8.07125 20.8206 8.27292 20.496 8.27292 20.2169C8.27292 19.9675 8.26375 19.3069 8.25917 18.4319C5.19933 19.0654 4.554 17.0231 4.554 17.0231C4.0535 15.8113 3.33025 15.4875 3.33025 15.4875C2.33383 14.8365 3.40725 14.8496 3.40725 14.8496C4.51183 14.9231 5.09208 15.9311 5.09208 15.9311C6.07292 17.5368 7.667 17.073 8.29583 16.8044C8.39483 16.1254 8.67808 15.6625 8.9925 15.4C6.54958 15.1375 3.982 14.2345 3.982 10.2113C3.982 9.06501 4.40825 8.12876 5.11408 7.39376C4.99033 7.12864 4.61908 6.06114 5.21033 4.61476C5.21033 4.61476 6.13158 4.33301 8.23533 5.69101C9.11533 5.45739 10.0503 5.34189 10.9853 5.33664C11.9203 5.34189 12.8553 5.45739 13.7353 5.69101C15.8253 4.33301 16.7466 4.61476 16.7466 4.61476C17.3378 6.06114 16.9666 7.12864 16.8566 7.39376C17.5578 8.12876 17.9841 9.06501 17.9841 10.2113C17.9841 14.245 15.4128 15.1331 12.9653 15.3913C13.3503 15.7063 13.7078 16.3503 13.7078 17.3338C13.7078 18.739 13.6941 19.8678 13.6941 20.209C13.6941 20.4846 13.8866 20.8128 14.4503 20.7078C18.8512 19.3305 22 15.393 22 10.7599C22 4.96126 17.0748 0.259888 11 0.259888Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_484_151">
					<rect width={width} height={height} fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	instagram: ({ width, height }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 21 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.0781 0H4.92188C2.2036 0 0 2.28767 0 5.10966V16.6915C0 19.5135 2.2036 21.8012 4.92188 21.8012H16.0781C18.7964 21.8012 21 19.5135 21 16.6915V5.10966C21 2.28767 18.7964 0 16.0781 0Z"
				fill="url(#paint0_radial_484_134)"
			/>
			<path
				d="M16.0781 0H4.92188C2.2036 0 0 2.28767 0 5.10966V16.6915C0 19.5135 2.2036 21.8012 4.92188 21.8012H16.0781C18.7964 21.8012 21 19.5135 21 16.6915V5.10966C21 2.28767 18.7964 0 16.0781 0Z"
				fill="url(#paint1_radial_484_134)"
			/>
			<path
				d="M10.5007 2.38452C8.27293 2.38452 7.99329 2.39466 7.11834 2.43596C6.24504 2.47752 5.64892 2.62101 5.12736 2.83162C4.58776 3.04912 4.13011 3.34011 3.67418 3.81361C3.21784 4.28702 2.93754 4.76213 2.72738 5.32206C2.52394 5.86369 2.38555 6.48281 2.34626 7.38901C2.30713 8.29742 2.29688 8.58782 2.29688 10.9007C2.29688 13.2136 2.30672 13.503 2.34642 14.4113C2.38662 15.3179 2.52484 15.9368 2.72754 16.4782C2.93721 17.0384 3.21751 17.5135 3.67361 17.9869C4.12945 18.4606 4.58711 18.7523 5.1263 18.9698C5.64826 19.1804 6.24446 19.3239 7.11761 19.3654C7.99263 19.4067 8.27203 19.4169 10.4998 19.4169C12.7278 19.4169 13.0065 19.4067 13.8815 19.3654C14.7548 19.3239 15.3516 19.1804 15.8735 18.9698C16.4129 18.7523 16.8699 18.4606 17.3257 17.9869C17.782 17.5135 18.0622 17.0384 18.2725 16.4785C18.4741 15.9368 18.6126 15.3177 18.6536 14.4115C18.6929 13.5031 18.7031 13.2136 18.7031 10.9007C18.7031 8.58782 18.6929 8.29759 18.6536 7.38918C18.6126 6.48255 18.4741 5.86377 18.2725 5.32232C18.0622 4.76213 17.782 4.28702 17.3257 3.81361C16.8694 3.33994 16.4131 3.04895 15.873 2.8317C15.3501 2.62101 14.7536 2.47743 13.8803 2.43596C13.0053 2.39466 12.7267 2.38452 10.4982 2.38452H10.5007ZM9.76484 3.91921C9.98329 3.91887 10.227 3.91921 10.5007 3.91921C12.6911 3.91921 12.9506 3.92738 13.8155 3.96817C14.6153 4.00616 15.0495 4.14488 15.3386 4.26147C15.7215 4.41578 15.9944 4.60032 16.2813 4.89847C16.5684 5.19654 16.7461 5.48038 16.8952 5.87782C17.0075 6.17759 17.1413 6.62826 17.1777 7.45858C17.217 8.35635 17.2255 8.62597 17.2255 10.8987C17.2255 13.1715 17.217 13.4412 17.1777 14.3389C17.1411 15.1692 17.0075 15.6199 16.8952 15.9197C16.7465 16.3172 16.5684 16.6002 16.2813 16.8981C15.9942 17.1961 15.7216 17.3806 15.3386 17.535C15.0498 17.6521 14.6153 17.7905 13.8155 17.8285C12.9508 17.8693 12.6911 17.8781 10.5007 17.8781C8.31034 17.8781 8.05071 17.8693 7.18602 17.8285C6.38621 17.7901 5.95211 17.6514 5.6627 17.5348C5.27994 17.3804 5.00645 17.196 4.71934 16.8979C4.43223 16.5998 4.25455 16.3167 4.1055 15.9191C3.9932 15.6192 3.85941 15.1685 3.82298 14.3382C3.78369 13.4405 3.77582 13.1708 3.77582 10.8966C3.77582 8.62248 3.78369 8.35422 3.82298 7.45645C3.85957 6.62613 3.9932 6.17546 4.1055 5.87527C4.25422 5.47782 4.43223 5.19398 4.71942 4.89592C5.00653 4.59785 5.27994 4.41331 5.66278 4.25866C5.95194 4.14156 6.38621 4.00318 7.18602 3.96502C7.94276 3.92951 8.23602 3.91887 9.76484 3.91708V3.91921ZM14.8796 5.33322C14.3361 5.33322 13.8952 5.79053 13.8952 6.35481C13.8952 6.919 14.3361 7.37674 14.8796 7.37674C15.423 7.37674 15.8639 6.919 15.8639 6.35481C15.8639 5.79062 15.423 5.33288 14.8796 5.33288V5.33322ZM10.5007 6.52726C8.17433 6.52726 6.28811 8.48545 6.28811 10.9007C6.28811 13.316 8.17433 15.2732 10.5007 15.2732C12.8272 15.2732 14.7128 13.316 14.7128 10.9007C14.7128 8.48554 12.8271 6.52726 10.5006 6.52726H10.5007ZM10.5007 8.06195C12.0109 8.06195 13.2352 9.3328 13.2352 10.9007C13.2352 12.4684 12.0109 13.7395 10.5007 13.7395C8.99054 13.7395 7.76639 12.4684 7.76639 10.9007C7.76639 9.3328 8.99054 8.06195 10.5007 8.06195Z"
				fill="white"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_484_134"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(5.57812 23.4803) rotate(-90) scale(21.6066 19.3573)"
				>
					<stop stopColor="#FFDD55" />
					<stop offset="0.1" stopColor="#FFDD55" />
					<stop offset="0.5" stopColor="#FF543E" />
					<stop offset="1" stopColor="#C837AB" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_484_134"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-3.51758 1.57045) rotate(79.0868) scale(9.64484 38.402)"
				>
					<stop stopColor="#3771C8" />
					<stop offset="0.128" stopColor="#3771C8" />
					<stop offset="1" stopColor="#6600FF" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	),
	linkedin: ({ width, height }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_484_129)">
				<path
					d="M16.8438 0H5.15625C2.30853 0 0 2.2036 0 4.92188V16.0781C0 18.7964 2.30853 21 5.15625 21H16.8438C19.6915 21 22 18.7964 22 16.0781V4.92188C22 2.2036 19.6915 0 16.8438 0Z"
					fill="white"
				/>
				<path
					d="M16.8438 0H5.15625C2.30853 0 0 2.2036 0 4.92188V16.0781C0 18.7964 2.30853 21 5.15625 21H16.8438C19.6915 21 22 18.7964 22 16.0781V4.92188C22 2.2036 19.6915 0 16.8438 0Z"
					fill="#0A66C2"
				/>
				<path
					d="M15.8739 17.857H18.3893C18.4805 17.857 18.5679 17.8224 18.6324 17.7609C18.6968 17.6994 18.7331 17.6159 18.7331 17.5289L18.7344 12.456C18.7344 9.80446 18.1358 7.76639 14.8897 7.76639C13.6557 7.72259 12.492 8.32978 11.8641 9.34369C11.861 9.34861 11.8564 9.35244 11.8508 9.3546C11.8452 9.35675 11.8391 9.3571 11.8333 9.3556C11.8275 9.35411 11.8224 9.35084 11.8187 9.34631C11.815 9.34177 11.813 9.33621 11.813 9.33048V8.3393C11.813 8.25227 11.7768 8.16881 11.7123 8.10728C11.6478 8.04574 11.5604 8.01117 11.4692 8.01117H9.08213C8.99096 8.01117 8.90353 8.04574 8.83907 8.10728C8.7746 8.16881 8.73838 8.25227 8.73838 8.3393V17.5284C8.73838 17.6155 8.7746 17.6989 8.83907 17.7605C8.90353 17.822 8.99096 17.8566 9.08213 17.8566H11.5974C11.6885 17.8566 11.776 17.822 11.8404 17.7605C11.9049 17.6989 11.9411 17.6155 11.9411 17.5284V12.9861C11.9411 11.7018 12.1963 10.4579 13.8645 10.4579C15.5089 10.4579 15.5302 11.9276 15.5302 13.0693V17.5288C15.5302 17.6159 15.5664 17.6993 15.6309 17.7609C15.6953 17.8224 15.7828 17.857 15.8739 17.857ZM3.26562 4.89136C3.26562 5.86458 4.10498 6.66537 5.12462 6.66537C6.14402 6.66528 6.98285 5.864 6.98285 4.89095C6.98268 3.91789 6.14376 3.11719 5.12428 3.11719C4.10455 3.11719 3.26562 3.91814 3.26562 4.89136ZM3.86366 17.857H6.38223C6.4734 17.857 6.56084 17.8224 6.6253 17.7609C6.68977 17.6993 6.72598 17.6159 6.72598 17.5288V8.3393C6.72598 8.25227 6.68977 8.16881 6.6253 8.10728C6.56084 8.04574 6.4734 8.01117 6.38223 8.01117H3.86366C3.7725 8.01117 3.68506 8.04574 3.6206 8.10728C3.55613 8.16881 3.51991 8.25227 3.51991 8.3393V17.5288C3.51991 17.6159 3.55613 17.6993 3.6206 17.7609C3.68506 17.8224 3.7725 17.857 3.86366 17.857Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_484_129">
					<rect width={width} height={height} fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	quickPlant: ({ width, height, color = 'black' }) => (
		<svg
			width={width}
			height={height}
			viewBox="0 0 162 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M53.5426 23.1476C52.0297 18.3157 49.0428 14.0784 45.0004 11.0297C40.958 7.9809 36.0629 6.27356 31.0014 6.14699C25.9398 6.02041 20.9655 7.48095 16.7758 10.3239C12.5861 13.1668 9.39105 17.2495 7.63859 21.9997C5.88614 26.7499 5.66412 31.9295 7.00366 36.8122C8.34319 41.695 11.1771 46.0361 15.1082 49.2271C19.0392 52.4181 23.8703 54.299 28.9242 54.606C33.978 54.913 39.0012 53.6308 43.2897 50.9392M43.2897 50.9392L30.395 30.395M43.2897 50.9392L56.1906 70.821"
				stroke={color}
				strokeWidth="3"
			/>
			<path
				d="M107.554 42.6388C107.021 40.6493 107.124 38.5428 107.848 36.6147C108.573 34.6865 109.882 33.0334 111.594 31.8871C113.305 30.7407 115.332 30.1586 117.391 30.2224C119.449 30.2861 121.437 30.9925 123.074 32.2425C124.711 33.4926 125.915 35.2235 126.519 37.1928C127.123 39.1621 127.095 41.2709 126.44 43.2236C125.785 45.1764 124.535 46.8752 122.866 48.0818C121.197 49.2885 119.192 49.9425 117.132 49.9522M117.132 49.9522L117.085 40.085M117.132 49.9522L117.032 59.5933"
				stroke={color}
				strokeWidth="2"
			/>
			<path
				d="M63.6699 47.3359C63.6699 47.7786 63.4681 48 63.0645 48H62.625C62.2344 48 61.9772 47.8438 61.8535 47.5312C61.7168 47.1732 61.5703 46.6751 61.4141 46.0371C61.1406 46.7207 60.6751 47.2611 60.0176 47.6582C59.3665 48.0488 58.5527 48.2441 57.5762 48.2441C56.3001 48.2441 55.3594 47.847 54.7539 47.0527C54.1484 46.252 53.8457 45.0736 53.8457 43.5176V37.6289C53.8457 37.4466 53.901 37.2936 54.0117 37.1699C54.1289 37.0462 54.2917 36.9844 54.5 36.9844H55.5742C56.0039 36.9844 56.2188 37.1992 56.2188 37.6289V43.4102C56.2188 44.9661 56.5801 45.8646 57.3027 46.1055C57.5371 46.1836 57.8138 46.2227 58.1328 46.2227C58.4583 46.2227 58.7904 46.1478 59.1289 45.998C59.474 45.8483 59.7832 45.6497 60.0566 45.4023C60.6686 44.8359 60.9746 44.1882 60.9746 43.459V37.6289C60.9746 37.4466 61.0299 37.2936 61.1406 37.1699C61.2513 37.0462 61.4271 36.9844 61.668 36.9844H62.6934C62.9212 36.9844 63.0872 37.0462 63.1914 37.1699C63.2956 37.2936 63.3477 37.4466 63.3477 37.6289V43.7324C63.3477 45.1061 63.4453 46.2129 63.6406 47.0527C63.6602 47.1243 63.6699 47.2188 63.6699 47.3359ZM68.3086 35.0996C67.8659 35.0996 67.4883 34.9466 67.1758 34.6406C66.8633 34.3411 66.707 33.9635 66.707 33.5078C66.707 33.0651 66.8633 32.6875 67.1758 32.375C67.4753 32.0755 67.8529 31.9258 68.3086 31.9258C69.0052 31.9258 69.4935 32.2448 69.7734 32.8828C69.8581 33.0716 69.9004 33.2799 69.9004 33.5078C69.9004 33.9635 69.7441 34.3411 69.4316 34.6406C69.1191 34.9466 68.7448 35.0996 68.3086 35.0996ZM69.4512 45.3145C69.4512 45.7767 69.6042 46.0078 69.9102 46.0078C70.0143 46.0078 70.1315 45.9785 70.2617 45.9199C70.5156 45.8092 70.6882 45.7539 70.7793 45.7539C70.916 45.7539 71.0267 45.8483 71.1113 46.0371L71.4141 46.7207C71.4661 46.8314 71.4922 46.9355 71.4922 47.0332C71.4922 47.3132 71.2513 47.5736 70.7695 47.8145C70.3138 48.0488 69.8613 48.166 69.4121 48.166C68.9694 48.166 68.6146 48.1172 68.3477 48.0195C68.0807 47.9219 67.8529 47.7591 67.6641 47.5312C67.2865 47.0625 67.0977 46.3008 67.0977 45.2461V37.6289C67.0977 37.4466 67.1497 37.2936 67.2539 37.1699C67.3581 37.0462 67.4818 36.9844 67.625 36.9844H68.9336C69.0833 36.9844 69.207 37.0462 69.3047 37.1699C69.4023 37.2936 69.4512 37.4466 69.4512 37.6289V45.3145ZM81.1309 41.3301C80.597 41.3301 80.3301 41.0664 80.3301 40.5391C80.3301 39.9336 80.1445 39.4714 79.7734 39.1523C79.4544 38.8724 79.0247 38.7324 78.4844 38.7324C77.9505 38.7324 77.5078 38.8431 77.1562 39.0645C76.8047 39.2858 76.5182 39.569 76.2969 39.9141C75.8672 40.5911 75.6523 41.4049 75.6523 42.3555C75.6523 44.1328 76.1927 45.2982 77.2734 45.8516C77.6641 46.0534 78.097 46.1543 78.5723 46.1543C79.0475 46.1543 79.4382 46.1022 79.7441 45.998C80.0501 45.8939 80.3236 45.7799 80.5645 45.6562C80.8053 45.5326 81.0137 45.4186 81.1895 45.3145C81.3717 45.2103 81.5215 45.1582 81.6387 45.1582C81.873 45.1582 82.0586 45.2656 82.1953 45.4805L82.4102 45.8418C82.5078 46.0111 82.5566 46.1771 82.5566 46.3398C82.5566 46.4961 82.4915 46.6621 82.3613 46.8379C82.2311 47.0072 82.0553 47.1634 81.834 47.3066C81.6191 47.4499 81.3717 47.5801 81.0918 47.6973C80.8118 47.8145 80.5221 47.9154 80.2227 48C78.7904 48.3841 77.4818 48.3255 76.2969 47.8242C74.9688 47.2643 74.054 46.2617 73.5527 44.8164C73.3053 44.1003 73.1816 43.2995 73.1816 42.4141C73.1816 41.5286 73.3118 40.7344 73.5723 40.0312C73.8392 39.3281 74.207 38.7324 74.6758 38.2441C75.6458 37.2415 76.9121 36.7402 78.4746 36.7402C79.8548 36.7402 80.9128 37.1016 81.6484 37.8242C82.2669 38.4427 82.5762 39.2174 82.5762 40.1484C82.5762 40.9362 82.1725 41.3301 81.3652 41.3301H81.1309ZM93.6699 46.0078L94.4902 45.8516C94.7181 45.8516 94.8613 46.0046 94.9199 46.3105L95.0566 47.0137C95.0632 47.0462 95.0664 47.1178 95.0664 47.2285C95.0664 47.3327 95.0241 47.4466 94.9395 47.5703C94.8613 47.694 94.7539 47.7982 94.6172 47.8828C94.3177 48.0716 93.9368 48.166 93.4746 48.166C92.5566 48.166 91.7917 47.7201 91.1797 46.8281C91.069 46.6784 90.9453 46.4831 90.8086 46.2422L89.4609 43.8594L88.875 44.6602C88.0742 45.7865 87.5924 46.6882 87.4297 47.3652C87.3841 47.541 87.319 47.6908 87.2344 47.8145C87.1562 47.9382 87.0163 48 86.8145 48H86.0332C85.89 48 85.7663 47.9414 85.6621 47.8242C85.5645 47.7005 85.5156 47.5475 85.5156 47.3652V31.3008C85.5156 31.125 85.5645 30.9785 85.6621 30.8613C85.7663 30.7441 85.89 30.6855 86.0332 30.6855H87.3809C87.5306 30.6855 87.6543 30.7441 87.752 30.8613C87.8496 30.9785 87.8984 31.125 87.8984 31.3008L87.9277 39.5332C87.9277 40.2493 87.8691 41.0794 87.752 42.0234C87.6413 42.9674 87.5697 43.5859 87.5371 43.8789V43.918C87.5371 43.9701 87.5501 43.9961 87.5762 43.9961C87.6348 43.9961 87.7129 43.9115 87.8105 43.7422C89.1061 41.3919 90.7305 39.1491 92.6836 37.0137C92.8724 36.8118 93.0482 36.7109 93.2109 36.7109C93.4583 36.7109 93.6797 36.8151 93.875 37.0234L94.3145 37.5117C94.5293 37.7721 94.6367 37.9642 94.6367 38.0879C94.6497 38.3092 94.5651 38.5046 94.3828 38.6738L92.625 40.4023C92.026 41.0143 91.4564 41.6556 90.916 42.3262L91.6484 43.5859C92.5729 45.2005 93.2467 46.0078 93.6699 46.0078Z"
				fill={color}
			/>
			<path
				d="M134.18 45.3145C134.18 45.7767 134.342 46.0078 134.668 46.0078C134.772 46.0078 134.906 45.9785 135.068 45.9199C135.368 45.8092 135.55 45.7539 135.615 45.7539C135.765 45.7539 135.882 45.8483 135.967 46.0371L136.27 46.7305C136.309 46.8281 136.328 46.9193 136.328 47.0039C136.328 47.1536 136.204 47.3359 135.957 47.5508C135.462 47.9609 134.814 48.166 134.014 48.166C132.555 48.166 131.826 47.1927 131.826 45.2461V31.3203C131.826 31.1445 131.878 30.9948 131.982 30.8711C132.087 30.7474 132.21 30.6855 132.354 30.6855H133.662C133.812 30.6855 133.936 30.7474 134.033 30.8711C134.131 30.9948 134.18 31.1445 134.18 31.3203V45.3145ZM147.334 47.4824C147.334 47.8275 147.165 48 146.826 48H145.879C145.625 48 145.472 47.9512 145.42 47.8535C145.368 47.7493 145.339 47.6582 145.332 47.5801C145.326 47.4954 145.312 47.3945 145.293 47.2773C145.254 46.9583 145.199 46.6133 145.127 46.2422C144.619 47.1732 143.822 47.7884 142.734 48.0879C142.35 48.1921 141.927 48.2441 141.465 48.2441C141.003 48.2441 140.54 48.166 140.078 48.0098C139.616 47.86 139.206 47.6354 138.848 47.3359C138.04 46.6589 137.637 45.7702 137.637 44.6699C137.637 43.4655 138.079 42.5443 138.965 41.9062C139.694 41.3919 140.632 41.1348 141.777 41.1348C142.923 41.1348 143.893 41.4701 144.688 42.1406C144.707 41.9193 144.717 41.6426 144.717 41.3105C144.717 40.9785 144.652 40.6465 144.521 40.3145C144.391 39.9824 144.206 39.7057 143.965 39.4844C143.47 39.0482 142.78 38.8301 141.895 38.8301C141.1 38.8301 140.293 39.0482 139.473 39.4844C139.316 39.569 139.18 39.6113 139.062 39.6113C138.887 39.6113 138.717 39.4388 138.555 39.0938C138.379 38.7422 138.291 38.4883 138.291 38.332C138.291 38.0456 138.506 37.7689 138.936 37.502C139.756 36.9941 140.853 36.7402 142.227 36.7402C143.477 36.7402 144.512 37.082 145.332 37.7656C146.302 38.5859 146.787 39.7448 146.787 41.2422C146.787 41.9062 146.68 42.7428 146.465 43.752C147.018 45.3275 147.308 46.571 147.334 47.4824ZM140.791 43.3418C140.524 43.5371 140.332 43.7324 140.215 43.9277C140.104 44.123 140.049 44.3542 140.049 44.6211C140.049 44.8815 140.094 45.1159 140.186 45.3242C140.283 45.526 140.417 45.6953 140.586 45.832C140.944 46.112 141.344 46.252 141.787 46.252C142.236 46.252 142.604 46.1999 142.891 46.0957C143.177 45.9915 143.424 45.8581 143.633 45.6953C144.082 45.3438 144.307 44.9727 144.307 44.582C144.268 44.0938 143.997 43.7096 143.496 43.4297C143.047 43.1693 142.516 43.0391 141.904 43.0391C141.429 43.0391 141.058 43.14 140.791 43.3418ZM150.156 37.6875C150.156 37.2188 150.381 36.9844 150.83 36.9844H151.367C151.732 36.9844 151.979 37.1211 152.109 37.3945C152.292 37.7852 152.448 38.2995 152.578 38.9375C153.164 37.8698 154.036 37.1862 155.195 36.8867C155.56 36.7891 156.012 36.7402 156.553 36.7402C157.1 36.7402 157.604 36.8574 158.066 37.0918C158.529 37.3197 158.893 37.6354 159.16 38.0391C159.655 38.7747 159.902 39.8587 159.902 41.291V47.3555C159.902 47.5378 159.844 47.6908 159.727 47.8145C159.609 47.9382 159.437 48 159.209 48H158.252C158.005 48 157.822 47.9382 157.705 47.8145C157.588 47.6908 157.529 47.5378 157.529 47.3555V41.2812C157.529 39.6146 156.917 38.7812 155.693 38.7812C154.977 38.7812 154.323 39.0807 153.73 39.6797C153.099 40.3242 152.783 41.0729 152.783 41.9258V47.3555C152.783 47.5378 152.728 47.6908 152.617 47.8145C152.507 47.9382 152.337 48 152.109 48H151.104C150.876 48 150.703 47.9382 150.586 47.8145C150.469 47.6908 150.41 47.5378 150.41 47.3555V41.3594C150.41 40.0508 150.368 39.1393 150.283 38.625C150.199 38.1042 150.156 37.7917 150.156 37.6875Z"
				fill={color}
			/>
		</svg>
	),
};

export default Icons;
