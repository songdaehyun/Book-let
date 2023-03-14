import React from "react";

import { ActionsNavigationBarWrapper } from "../../styles/common/BarsStyle";

function ActionsNavigationBar({ pre, title, next, preAction, nextAction, nextColor }) {
	return (
		<ActionsNavigationBarWrapper nextColor={nextColor}>
			<button onClick={preAction}>{pre}</button>
			<span>{title}</span>
			<button onClick={nextAction}>{next}</button>
		</ActionsNavigationBarWrapper>
	);
}

export default ActionsNavigationBar;
