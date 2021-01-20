import React from 'react';
import Moment from "moment";
import "./dayCard.css";

export default function dayCard(props) {
    const date=new Date();
    const today=Moment(date).format("YYYY-MM-DD"); //reference value to compare 
    return (
        <React.Fragment>

                <div className="daycard">

                    <center>
                        {/* Checking if the date from props is today */}
                        {today === props.date ? (
                            <h3 data-testid="day_test">Today</h3>
                        ) :(
                            <h3 data-testid="day_test">{Moment(props.date).format("dddd")}</h3>
                        )}

                        {/* getting image from api based on weather conditions */}
                        <img src={`https://www.metaweather.com/static/img/weather/png/64/${props.icon}.png`} alt="Weather Icon"/><br/>



                        {/* conditional rendering based on system props, if imperial, data converted to imperial */}
                        {props.system === "imperial" ? (
                                <>
                                    <strong data-testid="temp_test">{Math.round((Number(props.maxtemp)*9/5)+32)}&#x2109; {Math.round((Number(props.mintemp)*9/5)+32)}&#x2109;</strong>
                                    <br/>
                                </>
                            ) : (
                                <>
                                    <strong data-testid="temp_test">{Math.round(Number(props.maxtemp))}&#x2103; {Math.round(Number(props.mintemp))}&#x2103;</strong>
                                    <br/>
                                </>
                            )}

                            
                        <strong data-testid="temp_humidity" className="humid">Humidity {props.humid}%</strong>
                    </center>

                </div>
            
        </React.Fragment>
    )
}

