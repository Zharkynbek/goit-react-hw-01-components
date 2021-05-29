import React from "react"
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import friends from "./friends.json"
import transactions from "./transactions"
import Profile from "./components/Profile"
import Statistics from "./components/Statistics"
import FriendList from "./components/FriendList"
import TransactionHistory from "./components/TransactionHistory"


function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
