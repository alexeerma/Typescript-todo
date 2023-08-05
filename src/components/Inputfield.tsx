import './styles.css';
const Inputfield = () => {
  return (
    <form>
        <input type='input' placeholder='Enter a task' className='input__box' />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default Inputfield