import banner from './images/pastel_boxes.jpg'

export default function Content() {
    return (
        <div>
            <img src={banner} width="300px" alt="" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>First released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}