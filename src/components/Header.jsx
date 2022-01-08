export const Header = () => {
	return (
		<header className="header">
			<h1
				className="header__title"
				onClick={() => {
					// reload page
					window.location.reload();
				}}
			>
				Websites Screenshots
			</h1>
		</header>
	);
};
