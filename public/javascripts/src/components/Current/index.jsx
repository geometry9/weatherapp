import React from 'react';
import styles from './styles.css';
import cx from 'classnames';
import Mountains from '../Mountains';
import weatherIcons from '../../weather-icon-fixture';
import moment from 'moment';

const propTypes = {
  main: React.PropTypes.object,
  rain: React.PropTypes.object,
  weather: React.PropTypes.object,
  wind: React.PropTypes.object,
  city: React.PropTypes.string,
  time: React.PropTypes.string,
};

class Current extends React.Component {

  dayOrNight(){
      let hour = moment().get('hour');
      return (hour >= 18 || hour <= 5) ? 'night' : 'day';
  }

  getTempFahrenheit(temp){
    return Math.round(temp * 9/5 - 459.67);
  }

  mapIcons(){
    const prefix = 'wi wi-';
    const code = this.props[0].weather.id;
    let icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon;
    }
    // Finally tack on the prefix.
    return prefix + icon;
  }

  render() {
    return(
      <div className={`${styles["current-weather"]} ${styles[this.dayOrNight()]}`}>
        <h1 className={styles.city}>{this.props.city}</h1>
        <Mountains />
        <div className={`${styles["orb"]} ${styles[this.dayOrNight()]}`}></div>
        <div className={styles["weather-information"]}>
          <div className={`${this.mapIcons()} ${styles['icon']}`}></div>
          <div className={styles.temperature}>{this.getTempFahrenheit(this.props[0].main.temp)}F</div>
          <div className={styles.desc}>{this.props[0].weather.description}</div>
          <div className={styles.date}>{moment(this.props.time).format("ddd D")}</div>
          <div className={styles["max-temp"]}>Max Temp: {this.getTempFahrenheit(this.props[0].main.temp_max)}F</div>
          <div className={styles["min-temp"]}>Min Temp: {this.getTempFahrenheit(this.props[0].main.temp_min)}F</div>
          <div className={styles.wind}></div>
          <div className={styles.rain}>{this.props[0].rain["3h"] * 100}% chance of rain</div>
        </div>
      </div>
    );
  }
}

Current.propTypes = propTypes;

export default Current;
