import styles from '@/css/dashboard.module.css'
import Header from './Header'
import MainFrame from './MainFrame'

function getStack(id){
    return {
        "id": 1,
        "name": "Stack 1",
        "color": "#21AA27",
        "content": [
            {
                "type": "text",
                "title": "Title",
                "createdAt": new Date("2023-07-13"),
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi unde dicta quos? Delectus a facilis placeat architecto quasi praesentium minus magni, nemo molestias numquam tempore adipisci vitae dicta voluptate dolorem fugiat maxime, autem voluptates distinctio. Tenetur non rem adipisci cum voluptates maxime praesentium voluptate. Quasi hic ut sit culpa!",
            },
            {
                "type": "image",
                "title": "Image name",
                "createdAt": new Date("2023-07-13"),
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi unde dicta quos? Delectus a facilis placeat architecto quasi praesentium minus magni, nemo molestias numquam tempore adipisci vitae dicta voluptate dolorem fugiat maxime, autem voluptates distinctio.",
                "url": "https://analysisfunction.civilservice.gov.uk/wp-content/uploads/2022/12/pie-bar.svg"
            },
            {
                "type":"graph",
                "title": "Graph Title",
                "createdAt": "2023-07-13",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi unde dicta quos? Delectus a facilis placeat architecto quasi praesentium minus magni, nemo molestias numquam tempore adipisci vitae dicta voluptate dolorem fugiat maxime, autem voluptates distinctio.",
                "xLabel": "Label1",
                "yLabel": "Label2",
                "keyframes": [
                  { "x": 10, "y": 20 },
                  { "x": 30, "y": 40 },
                  { "x": 50, "y": 70 },
                  { "x": 70, "y": 90 },
                  { "x": 100, "y": 110 },
                  { "x": 120, "y": 130 },
                  { "x": 140, "y": 170 },
                ]
              }
        ]
    }
}

export default function Dashboard({id}) {

    const stack = getStack(id)

    return (
    <div className={styles.mainContainer}>
        <Header stack={stack}/>
        <MainFrame stack={stack}/>
    </div>
    )
}
