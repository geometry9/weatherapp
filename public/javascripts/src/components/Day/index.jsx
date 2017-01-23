import React from 'react';
import styles from './styles.css';
import cx from 'classnames';
import weatherIcons from '../../weather-icon-fixture';
import moment from 'moment';

const propTypes = {
  numberClass: React.PropTypes.number,
  main: React.PropTypes.object,
  rain: React.PropTypes.object,
  weather: React.PropTypes.object,
  wind: React.PropTypes.object,
  time: React.PropTypes.string,
};

class Day extends React.Component {
  getTempFahrenheit(){
    return Math.round(this.props.main.temp * 9/5 - 459.67);
  }

  mapIcons(){
    const prefix = 'wi wi-';
    const code = this.props.weather.id;
    let icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon;
    }
    // Finally tack on the prefix.
    return prefix + icon;
  }

  render() {
    const containerClasses = cx({
      [styles[`day-container-${this.props.numberClass}`]]: true,
      [styles.day]: true,
    });
    return(
      <div className={containerClasses}>
        <div className={styles.temp}>{this.getTempFahrenheit()} F</div>
        <div className={`${this.mapIcons()} ${styles['icon']}`}></div>
        <div className={styles.desc}>{this.props.weather.description}</div>
        <div className={styles.date}>{moment(this.props.time).format("ddd D")}</div>
      </div>
    );
  }
}

Day.propTypes = propTypes;

export default Day;
