import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlayers,
  addPlayers,
  deletePlayers,
  sortByScores
} from "../store/actions/playerActions";
import { players } from "../store/reducers/index";
import PropTypes from "prop-types";
import AddPlayer from "./AddPlayerForm";
import Footer from "./Footer";
class Scoreboard extends Component {
  state = {
    showForm: false,
    btnText: true
  };
  componentDidMount() {
    this.props.getPlayers();
  }
  handleAddPlayers = values => {
    this.props.addPlayers(values);
    this.setState({
      showForm: false,
      btnText: !this.state.btnText
    });
  };
  handleDeletePlayers = id => {
    this.props.deletePlayers(id);
  };
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      btnText: !this.state.btnText
    });
  };
  handleSortByScores = () => {
    this.props.sortByScores();
  };
  render() {
    const playerDetails = this.props.players.map((player, _id) => (
      <tr key={player._id} className="table-content">
        <th>{player.playerName}</th>
        <th>{player.score}</th>
        <th>
          {
            <i
              className="fas fa-user-minus pointer"
              onClick={this.handleDeletePlayers.bind(this, player._id)}
            >
              Delete
            </i>
          }
        </th>
      </tr>
    ));
    return (
      <div>
        <h2 className="heading">Scoreboard</h2>
        <button onClick={this.handleShowForm} className="button-primary">
          {this.state.btnText ? "Add New Player" : "Close"}
        </button>
        {this.state.showForm ? (
          <AddPlayer onSubmit={this.handleAddPlayers} />
        ) : null}
        <br />
        <div className="sort-btn">
          <button className="button-primary" onClick={this.handleSortByScores}>
            Sort by Highest Scores
          </button>
        </div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Scores</th>
            <th>Delete Player</th>
          </tr>
          <tbody>{playerDetails}</tbody>
        </table>

        <Footer />
      </div>
    );
  }
}
Scoreboard.proptypes = {
  playerName: PropTypes.string,
  scores: PropTypes.number
};
const mapStateToProps = state => ({
  players: players(state)
});

export default connect(
  mapStateToProps,
  { getPlayers, addPlayers, deletePlayers, sortByScores }
)(Scoreboard);
