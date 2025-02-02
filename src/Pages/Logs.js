import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const API = process.env.REACT_APP_API_URL


function Logs() {
    
    const [logs, setLogs] = useState([])

useEffect(() => {
        fetch(`${API}/logs`)
        .then((res) => res.json())
        .then((response) => {
            setLogs(response)
            console.log(response)
        })
        .catch((e) => console.log(e))
    }, [])




    return (
        <>
        {logs[0] ? (
            <button>
            <Link to="/logs/new"> New Logs</Link>
        </button>
        ) : ""}
        <table>
            <tbody>
        {logs.map((log, index) => {
            return (
                <tr key={index}className="Log">
                    <td><p>{log.daysSinceLastCrisis}</p></td>
                     <td> <p>{log.mistakesWereMadeToday ? "Mistakes Were Made Today" : "No Mistakes Were Made Today" }</p></td>
                    <td><p>{log.title}</p></td>
                    <td><p>{log.post}</p></td>
                    <td><h4><a href={`/logs/${index}`}>{log.captainName}</a></h4></td>
                </tr>
            )
        })}
        </tbody>
        </table>
        </>
    )
}
export default Logs