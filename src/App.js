import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
/*
class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Let's develop management system!</h2>
      </div>
    );
  }
}
*/

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동ㅋㅋㅋ',
  'birthday' : '981026',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이세영',
  'birthday' : '960322',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '900112',
  'gender' : '여자',
  'job' : '취준생'
}
]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        })
      }
    </div>
  );
}

export default App;
