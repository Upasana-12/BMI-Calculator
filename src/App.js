import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component
{
    state = {
      name:"",
      ft : "",
      inch : "",
      weight : "",
      message : ""
    }
    namechange = (e)=>
    {
        this.setState({name : e.target.value})
    }

    ftchange = (e)=>
    {
        this.setState({ft : e.target.value})
    }

    inchchange = (e)=>
    {
        this.setState({inch : e.target.value})
    }

    weightchange = (e)=>
    {
        this.setState({weight : e.target.value})
    }
    calBMI = ()=>
    {
        const {ft , inch , weight, message,name }=this.state;
        if(ft=="" || inch=="" || weight=="")
        alert("Please fill all fields!");
        else
        {
            var inches=parseInt(ft)*12+parseInt(inch);
            var meter=0.0254*inches;
            var metersq=meter*meter;
            var res=weight/metersq;
            var mesg="Hello "+name.toLocaleUpperCase()+"! \n Your BMI is ";
            var b=res.toString();
            b=Math.round(b*100)/100;
            mesg = mesg + b + " . ";
          if( res >= 18.5  && res <= 24.99 ){
              mesg = mesg + "You are in a healthy weight range.";
          }
          else if(res >= 25  && res <= 29.9){
            mesg = mesg + "You are overweight.";
          }
          else if(res >= 30 && res<=34.99){
              mesg = mesg + "You fall in obese class I.";
          }
          else if(res >= 35 && res<=40){
            mesg = mesg + "You fall in obese class II.";
        }
        else if(res > 40){
          mesg = mesg + "You fall in obese class III.";
      }
          else if(res < 18.5 && res>=17){
            mesg = mesg + "You are under weight. You have mild thinness.";
          }
          else if(res<17 && res>=16)
          {
            mesg = mesg + "You are under weight. You have moderate thinness.";
          }
          else if(res<16)
          mesg = mesg + "You are under weight. You have severe thinness.";
        //  var b=res.toString();
          this.setState({message: mesg });  
        }
    }
    render()
    {
      return (
        <div className="container">
          <div className="heading">
            <h2>BMI Calculator</h2>
          </div>
          <div className="box">
            
                <label>
                   Please enter your name :
                 </label><br/>
               <input type="text" placeholder="Enter name" value={this.state.name}  onChange={this.namechange}   /> <br/><br/>
               <label>
                  Please enter your height : 
            </label><br/>
            <input type="text" placeholder="Enter ft." name="ft" value={this.state.ft} onChange={this.ftchange}   /><br/>
            <input type="text" placeholder="Enter inches" name="inch" value={this.state.inch} onChange={this.inchchange}   /><br/><br/>
             <label>
             Enter your weight in kg : 
            </label><br/>
            <input type="text" name="weight" placeholder="Enter weight" value={this.state.weight} onChange={this.weightchange}    /><br/><br/>
            <button onClick={this.calBMI}>SUBMIT</button><br/><br/>
            {this.state.message?<label>{this.state.message}</label> : ""}
            <br/><br/>
          </div>
        </div>
      )
    }
}

export default App;
