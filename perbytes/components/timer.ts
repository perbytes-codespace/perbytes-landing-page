import {useEffect, useState} from "react";
import {clearInterval} from "node:timers";

const [status, setStatus] = useState(false);
const [days, setDays ] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

useEffect(() => {
    const launchDate = new Date();

    const interval = setInterval(() => {
        const current = new Date();
        const remaining = launchDate.getTime() - current.getTime();

        const dd = Math.floor(remaining / (1000 * 60 * 60 * 24));
        setDays(dd);

        const hh = Math.floor((remaining % 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        setHours(hh);

        const mm = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(mm);

        const ss = Math.floor((remaining % (1000 * 60)) / 1000);
        setSeconds(ss);


        if (dd <= 0 && hh <=0 && mm <=0 && ss <=0) {
            setStatus(true);
        }
    }, 1000);

    return () => clearInterval(interval as any);
}, []);