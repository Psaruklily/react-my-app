import customContext from "../services/ContexService";
import {Context} from '../services/ContexService';

export default function FullUsers(props) {

  let { items } = props;

  return (
    <Context.Consumer>
      {
        (value) => {
         return (<div>
            {
              items.map(user => (<div key={user.id}>{user.id} - {user.username} - {value}</div>))
            }
          </div>)
        }
      }
    </Context.Consumer>

  )
}