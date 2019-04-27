import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlayers,
  addPlayers,
  deletePlayers,
  sortByScores
} from "../store/actions/playerActions";
import PropTypes from "prop-types";
import AddPlayer from "./addPlayerForm";
import Footer from "./footer";
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
        <table className="table">
          <thead className="thead-content">
            <tr>
              <td>Name</td>
              <td>Scores</td>
              <td>
                <div>
                  <button className="btn1" onClick={this.handleSortByScores}>
                    Sort by Score
                  </button>
                </div>
              </td>
            </tr>
          </thead>
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
  players: state.playerReducer.players
});

export default connect(
  mapStateToProps,
  { getPlayers, addPlayers, deletePlayers, sortByScores }
)(Scoreboard);
