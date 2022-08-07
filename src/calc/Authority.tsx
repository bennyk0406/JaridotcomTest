import { useState } from "react";
import CalculatorHeader from "../components/CalculatorHeader";

const Authority = () => {
	const [ fame, setFame ] = useState(20);

	return (
		<section id="authority">
			<CalculatorHeader src="../assets/postcard.svg" title="권위의 엽서 계산기" />
			<article>
				<label>
					현재 명성 :
					<input
						type="number"
						id="fame"
						defaultValue={0}
						onChange={
							(e) => {
								const value = e.target.valueAsNumber || 0;
								setFame(Math.floor(20 + (0.015 * value)));
							}
						}
					/>
				</label>
				<p id="postcard-fame">
					권위의 엽서 명성 : -{fame.toLocaleString()}
				</p>
			</article>
		</section>
	);
};

export default Authority;