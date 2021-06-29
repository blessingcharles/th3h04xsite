
import React from 'react'

import ListElement from './ListElement'

export default function AllList() {
    return (
        <div class="list-group p-5 ">

        <ListElement 
            heading="WigSify"
            tag="GeeksCommunity Management"
            href=""
            content="
               Built with Node React and MariaDb .
                System where the user can interact with friends by chatting or
                posting, share his own interests with his friends and can share
                programming codes. We name this app as ‘WIgSify ‘(W-
                WhatsApp, I-Instagram, G- GitHub, Sify-Spotify). This helps
                geeks to share code, chat amongst themselves and share their
                interests amongst them.
            "
            features="MultiUser Authentication Chats with Posts and Code Sharing "
            />

    <ListElement 
            heading="TomOS"
            tag="Os Development"
            href=""
            content="
                Os is always remain magic to us , to demistify it i develop a very simple 64 bit os with
                bootloader and systemcall , a Topsy terminal supports with few commands and miniml systemcalls
            "
            features="Page Table , User and Kernel Space , Keyboard driver , minimal libc support"
            />
    <ListElement 
            heading="Mern Blog"
            tag="MERN STACK"
            href=""
            content="
               A Simple Blog with multiuser authentication with jwt 
            "
            features="share blogs and see other people blog"
            />
    
    <ListElement 
            heading="Django Blog"
            tag="Django"
            href=""
            content="
                A simple blog same as mern Blog but with different framework
            "
            features="share blogs and see other people blog"
            />

    <ListElement 
            heading="Bruteforcers"
            tag="Bruteforcers"
            href=""
            content="
                    Simple SSH  , FTP , GMAIL bruteforcers
            "
            features="custom wordlist"
            />

    <ListElement 
            heading="Simple Backdoors"
            tag="childish worms"
            href=""
            content="
                backdoors[client and server] , keyoggers , wifipassword stealer
            "
            features="implemented in python"
            />
    <ListElement 
            heading="Automate"
            tag="automaion"
            href=""
            content="
                Automate instagram whatsapp with selenium in python
            "
            features="headless selenium driver"
            />
            
    </div>
    )
}
