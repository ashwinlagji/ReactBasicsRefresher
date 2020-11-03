import React from 'react';


const scaleNames = {
    c: 'Celcious',
    f: 'Fehrenhiet'
}

function BoilingVerdict(props){

    if(props.celcious >= 100){
        return <p>the water would boil</p>
    }
    else{
        return <p>water would not boil</p>
    }
}

export class TemperatureInput extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        let temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter the temperature in {scaleNames[this.props.scale]}</legend>
                <input 
                    name="temperature"
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celcious={parseFloat(temperature)}></BoilingVerdict>
            </fieldset>
        )
    }
}


export class Calculator extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            temperature: '',
            scale: 'c'
        }

        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelciousChange = this.handleCelciousChange.bind(this);
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'c', temperature});
    }

    handleCelciousChange(temperature) {
        this.setState({scale: 'f', temperature});
    }


    render(){

        const scale = this.state.scale;
        const temperature = this.state.temperature;

        const celcious = scale === 'f'? tryConvert(temperature, toCelsius) : temperature;
        const fehrinite = scale === 'c'? tryConvert(temperature, toFahrenheit) : temperature;


        return(
            <div>
                <TemperatureInput scale={'f'} temperature={fehrinite} onTemperatureChange={this.handleCelciousChange}/>
                <TemperatureInput scale={'c'} temperature={celcious} onTemperatureChange={this.handleFahrenheitChange}/>
            </div>
        )
    }
}


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}