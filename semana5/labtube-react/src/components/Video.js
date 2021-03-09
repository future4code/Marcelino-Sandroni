const imgPath = 'https://picsum.photos/200/200?a='
const style = {
  minWidth: '20%',
  minHeight: '20%',
  borderBox: '10%',
}



const Video = ({title, image, link, key}) =>
  <div className='video' key={key}
  style={style}
  onMouseOver={console.log('oi')}>
    <img src={image} alt="Youtube video" />
    <h4><a href={link}>{title}</a></h4>
  </div>
    

export default Video