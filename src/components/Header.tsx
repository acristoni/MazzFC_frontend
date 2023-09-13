import { DotsNine } from "@phosphor-icons/react";
import mock from "../mock/mockData"

export default function Header() {
    return (
        <header className="App-header Template-container">
            <div className="Flex">
            <p>
                <strong>Agile Content</strong> Frontend test
            </p>
            </div>
            <div className="Flex">
                <DotsNine size={32} style={{ cursor: 'pointer'}}/>
                <img 
                    src={mock.mockAvatarUrl} 
                    alt='avatar'
                    className="Avatar"
                />
            </div>
        </header>
    )
}