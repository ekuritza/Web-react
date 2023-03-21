import { useParams } from "react-router-dom"

export default function Sobre() {
    const { name } = useParams()
    return (
        <div >
            <p>Olá usuário {name}!</p>
        </div>
    )
}