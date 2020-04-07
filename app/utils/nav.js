import history from 'browserHistory';

export default function nav(loc) {
  console.log(`navigating to ${loc}`);
  history.push(loc);
}
