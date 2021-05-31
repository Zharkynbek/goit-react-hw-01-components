import React, {Component} from "react"
import PropTypes from "prop-types";
import "./Statistics.css"



// const Statistics = ({ title, stats }) => (
//   <section className="statistics">
//     {title && <h2 className="title">{title}</h2>}
//     <ul className="stat-list">
//       {stats.map(({ id, label, percentage }) => (
//         <li className="item" key={id}>
//           <span className="label"> {label}</span>
//           <span className="percentage"> {percentage}</span>
//         </li>
//       ))}
//     </ul>
//   </section>
// );

class Statistics extends Component {
  render() {
    const {stats, title } = this.props;
    return (
      <section className="statistics">
     {title && <h2 className="title">{title}</h2>}
     <ul className="stat-list">
       {stats.map(({ id, label, percentage }) => (
         <li className="item" key={id}>
           <span className="label"> {label}</span>
           <span className="percentage"> {percentage}</span>
         </li>
       ))}
     </ul>
   </section>
    )
  }
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics