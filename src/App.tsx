import React from 'react';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to March Madness</h1>
      <h4>
        Below We Have Each of the College Basketball Teams and Their Information
      </h4>
    </header>
  );
}

interface TeamProps {
  name: string;
  mascot: string;
  location: string;
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h1>{oneTeam.name}</h1>
        <h3>{oneTeam.mascot}</h3>
        <h5>{oneTeam.location}</h5>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {CollegeBasketballTeams.teams.map((team: any) => (
        <TeamCard
          name={team.school}
          mascot={team.name}
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <TeamList />
      </div>
    </div>
  );
}

export default App;
