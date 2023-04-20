import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://data.tg.ch/api/v2/catalog/datasets/div-energie-11/exports/json")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					<tr>
            <th>Jahr</th>
            <th>Erdgasheizungen</th>
            <th>Waermepumpen</th>
          </tr>
          <tr>
          <td>
            { item.jahr} 
            </td>
            <td>
            { item.erdgasfeuerungen } 
            </td>
            <td>
            { item.waermepumpen }
            </td>
          </tr>

					</ol>
				))
			}
		</div>
	);
}
}

export default App;
