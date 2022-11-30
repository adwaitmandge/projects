import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAY.slice(today, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, today)
  );
  console.log(data);
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      {/* allowZeroExpanded allows all accordions to be closed */}
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              {/* Accordion item heading is something that you will see when the accordion has collapsed */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="icon-small"
                      alt="weather"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min - 273.15) - 5}°C /{" "}
                      {Math.round(item.main.temp_max - 273.15)} °C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>   
              <AccordionItemPanel>
                {/* panel content basically represents the content that you'll see when the accordion is uncollapsed */}
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind Speed:</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sea Level:</label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels Like:</label>
                        <label>{Math.round(item.main.feels_like - 273.15)}°C</label>
                    </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
