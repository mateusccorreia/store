import '../styles/Button.css'

const styleSucess = {
   color: 'white',
   backgroundColor: "#B0D8A4",
}

const styleWarning = {
   color: 'black',
   backgroundColor: '#FEE191',
}

const styleDanger = {
   color: 'white',
   backgroundColor: '#E84258',
}

const styleDefault = {
   color: 'white',
   backgroundColor: 'gray',
}

const styleInfo = {
   color: 'white',
   backgroundColor: 'blue'   
}

function styleBtn (status) {
   if(status ==='success') {
      return styleSucess
   } else if(status ==='warning') {
      return styleWarning       
   } else if (status ==='danger') {
      return styleDanger
   } else if (status === 'info') {
      return styleInfo
   } else {
      return styleDefault 
   } 
}

export default function Button(props) {
   return (        
      <button className='btn' style={styleBtn(props.status)}>{props.name}</button>
   )
}

