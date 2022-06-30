import React, { Component } from 'react';
import FamilyTree from './tree';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: '100%' }}>

        <FamilyTree nodes={[
          { id: 1, pids: [2], gender: 'female', name: "grand mother 1", relation: "grandmother" },

          { id: 2, pids: [1], gender: 'male', name: "grand father 2", relation: "grandfather" },

          { id: 3, pids: [4, 9], gender: 'male', name: "father 3", fid: 1, mid: 2, relation: "father" },

          { id: 4, pids: [3], gender: 'female', name: "mother 4", fid: 21, mid: 22, relation: "mother" },

          { id: 5, pids: [8], gender: 'male', name: "son 5", fid: 3, mid: 4, relation: "son" },

          { id: 8, pids: [5], gender: 'female', name: 'daughter in law 8', ewlation: 'wife' },

          { id: 6, pids: [10], gender: 'female', name: "daughter 6", fid: 3, mid: 4, relation: "daughter" },

          { id: 10, pids: [6], gender: 'male', name: "son in law 10", relation: "wife" },

          { id: 11, fid: 10, mid: 6, gender: 'male', name: "son of 10 & 6 id 11", relation: "wife" },

          { id: 7, pids: [8], gender: 'male', name: "son 7", fid: 3, mid: 4, relation: "husband" },

          { id: 9, pids: [3], gender: 'female', name: "wife id 9", fid: 13, mid: 14, relation: "wife" },

          { id: 12, gender: 'female', name: "daughter of 9 & 3", fid: 3, mid: 9, relation: "wife" },
        ]} />
      </div>
    );
  }
}