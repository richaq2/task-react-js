import React from "react";
import './App.css';
import { Button, Icon } from 'semantic-ui-react'
class App extends React.Component {
 
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async componentDidMount() {
		await fetch(
"https://jservice.io/api/random")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					ques: json,
					DataisLoaded: true
				});
			})
	}

	
	
	  handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
	
		const abc = data.get('ans'); // reference by form input's `name` tag
		const xyz = data.get('cans'); // reference by form input's `name` tag
		if (abc  === xyz){
			alert('Correct Answer');
		}
		else{
			alert('Wrong Answer');

		}
		window.location.reload(false);

	  }
	
 
	render() {
		const { DataisLoaded, ques} = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait Question is Loading..... </h1> </div> ;

		return (
			
		<div className = "App">
		<div className="container" style={{border:"solid",padding:"20px",borderRadius:"10px",borderWidth:"3px" }} >
			<form onSubmit={this.handleSubmit} style={{margin:"20px"}}>
			<h1 ><Icon name="question"></Icon>TriviaGame<Icon name="question"></Icon> </h1> 
      <div>{
		  ques.map((que) => (
			  <ol key = { que.id } >
					<h3 ><span style={{fontSize:"25px",color:"red"}}>Q.</span> { que.question }?</h3>
					<input type="hidden" name="cans" value = {que.answer} style={{font:"small"}}/> {que.answer}<br />
				    <input type="text" name="ans" placeholder="Type your answer here..." className="ans1" required /> 
				
          <div>
          <Button style={{marginTop:"20px",backgroundColor:"green",color:"white"}}  type="submit" value="Submit" >Submit</Button>
          </div>

					</ol>
				))
			}
      </div>
			</form>
		</div>
		</div>
	);
}
}

export default App;
