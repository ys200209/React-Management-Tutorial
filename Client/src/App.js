import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'; // 홈페이지에 css 작업을 하기위한 라이브러리 (const styles)

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


const styles = theme => ({
  root : { // root 아이디에 css 적용
    width : '100%',
    marginTop : theme.spacing.unit * 3, // 상단 여백을 3의 가중치만큼 주도록 함
    overflowX : 'auto' // 전체. 즉, root 아이디에 해당하는 기능들은 모두 X축에 overflow 되도록 설정함
  },
  table : { // table에 css 적용
    minWidth : 1080 // 무조건 1080 픽셀을 부여하며 페이지가 작아져도 이 크기는 변함이 없다.
  }
})

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
];


function App() {
  
    return(
      <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
            </TableBody>
          </Table>
        </Paper>
    );
}

export default App; // 기본값임
//export default withStyles(styles)(App); // withStyles를 적용하기 위한 코드