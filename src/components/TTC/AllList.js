
import React from 'react'

import ListElement from './ListElement'

export default function AllList() {
    return (
        <div class="list-group p-5 ">

        <ListElement 
            heading="Bounty Cat"
            tag="enumeration scanner"
            href=""
            content="
                Helps you to enumerate domains and subdomains , scrap all urls , find sensitive information ,
                capture screen shots all of it . Use wordlist of Json HAddix as default
            "
            todo="CSRF token scanner"
            />

    <ListElement 
            heading="DevBloopers"
            tag="Misconfigurations"
            href=""
            content="
                Scan for the best practise for headers and tell any info leak in the headers
                Scan for Cors Vulnerability with payloads released by security researchers
            "
            todo="Host heder injection"
            />
    <ListElement 
            heading="JODOM"
            tag="DOM Xss"
            href=""
            content="
                Scan for sources and sinks in javascript by scraping and parsing all js files
                and report the sinks which may lead to security risks
            "
            todo="More Reliablity"
            />
    
    <ListElement 
            heading="GraphqlInjector"
            tag="GraphQl Endpoints"
            href=""
            content="
                RestInPeace guys , nowadays graphql become more famous , it get the introcepion query , search for the
                open graphiql endpoints , and then shoots various payloads to find vulnerability
            "
            todo="Needed more Tests"
            />

    <ListElement 
            heading="NoSql Injector"
            tag="NoSql scanner"
            href=""
            content="
                Test For MongoDb Vulnerabilities in the api endpoints for nosql guys
            "
            todo="More Nosql Tests"
            />
    <ListElement 
            heading="WifiHackCat"
            tag="NetworkPacketSniffer"
            href=""
            content="
                Helps to sniff and manipulate network dot11 packets around you
            "
            todo="Add more Feautures"
            />
    <ListElement 
            heading="BugKishCaptures"
            tag="ScreenCapture"
            href=""
            content="
                list of urls give the snap of the main page , which greatly reduce your time if you have lot to enumerate on your own
                Done with Nodejs Puppetter
            "
            todo="More Speed"
            />
    </div>
    )
}
