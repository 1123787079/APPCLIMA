import React from "react";

export default class WeatherCard extends React.Component {
    /*
    Weather card
    */

    constructor(props) {
        super(props);
        this.state = {
            wdata: props.response
        };
    }

    render() {
        return (
            <div className="card-cover">
                <div className="card"
                    style={
                        this.state.wdata.current.is_day === 0 ?
                            {
                                //AGREGAR FONDO AQUI
                            }
                            :
                            {}
                    }>
                    <div className="info">
                        <div className="condition">
                            <div className="flex">
                                <img className="wicon" src={this.state.wdata.current.condition.icon} alt="weather-icon" />
                                <div className="temp">{this.state.wdata.current.temp_c}&#8451;</div>
                            </div>
                            <div className="status">{this.state.wdata.current.condition.text}</div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Feels like</td>
                                    <td>{this.state.wdata.current.feelslike_c}&#8451;</td>
                                </tr>
                                <tr>
                                    <td>Precipitation</td>
                                    <td>{this.state.wdata.current.precip_in}%</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{this.state.wdata.current.humidity}%</td>

                                </tr>
                                <tr>
                                    <td>Wind</td>
                                    <td>{this.state.wdata.current.wind_kph} kph <span className="dir">({this.state.wdata.current.wind_dir})</span></td>
                                </tr>
                                <tr>
                                    <td>Visibility</td>
                                    <td>{this.state.wdata.current.vis_km} KM</td>
                                </tr>
                                <tr>
                                    <td>Pressure</td>
                                    <td>{this.state.wdata.current.pressure_mb} mb</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="location">
                        <div className="city">
                            {this.state.wdata.location.name}
                        </div>
                        <div className="flex">
                            <div className="region">
                                {this.state.wdata.location.region}
                            </div>
                            <div className="country">
                                {this.state.wdata.location.country}
                            </div>
                        </div>
                        <div className="timed">
                            {this.state.wdata.location.localtime}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    componentDidUpdate(props) {
        if (this.state.wdata !== props.response) {
            this.setState({
                wdata: props.response
            })
        }
    }
}