import { DotsNine } from "@phosphor-icons/react";
import mock from "../mock/mockData"

export default function Header() {
    return (
        <header className="App-header">
            <div className="App-header-container">
            <p>
                <strong>Agile Content</strong> Frontend test
            </p>
            </div>
            <div className="App-header-container">
                <DotsNine size={32} />
                <img 
                    src={mock.mockAvatarUrl} 
                    alt='avatar'
                    className="Avatar"
                />
            </div>
        </header>
    )
}