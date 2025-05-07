import React, { useState } from "react";

let Home = () => {
	let [todo, setTodo] = useState("");
	let [list, setList] = useState([]);


	function Del(delChoreplace) {
		let newList = list.filter((_, choreplace) => choreplace !== delChoreplace);
		setList(newList);
	}

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (todo.trim() === "") return;
					setList([...list, todo]);
					setTodo("");
				}}
			>
				<p className="d-flex justify-content-center title">My To Dos</p>
				<div className="card">
					<input
						type="text"
						placeholder="Please write a To Do"
						value={todo}
						onChange={(event) => setTodo(event.target.value)}
					/>
					<ul>
						{list.map((chore, choreplace) => (
							<li key={choreplace} className="listformat">
								{chore}
								<button
									type="button"
									className="btn-close float-end"
									onClick={() => Del(choreplace)}>
								</button>
							</li>
						))}
						<li className="listformat">{list.length} To Dos left</li>
					</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;