// Countdown.jsx
import React, { useEffect, useMemo, useState } from "react";

function diffParts(targetDate) {
    const now = new Date();
    const diffMs = +targetDate - +now;
    if (diffMs <= 0) {
        return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { done: false, days, hours, minutes, seconds };
}

export default function Countdown({ target }) {
    // URL support (?date=...) – remember to encode '+' as '%2B' if you use offsets
    const targetFromUrl = useMemo(() => {
        try {
            const p = new URLSearchParams(window.location.search);
            const s = p.get("date");
            return s ? new Date(s) : null;
        } catch {
            return null;
        }
    }, []);

    const DEFAULT_TARGET = "2026-04-21T11:00:00+20:30";
    const targetDate = useMemo(() => {
        const d = targetFromUrl || (target ? new Date(target) : new Date(DEFAULT_TARGET));
        return isNaN(+d) ? null : d;
    }, [targetFromUrl, target]);

    const [time, setTime] = useState(() =>
        targetDate ? diffParts(targetDate) : { done: false, days: 0, hours: 0, minutes: 0, seconds: 0 }
    );

    useEffect(() => {
        if (!targetDate) return;
        const id = setInterval(() => setTime(diffParts(targetDate)), 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    if (!targetDate) {
        return (
            <p style={{ color: "#e11d48" }}>
                Invalid or missing date. Pass <code>target="2026-04-20T11:00:00+10:00"</code> or use{" "}
                <code>?date=2026-04-20T11:00:00%2B010:00</code>.
            </p>
        );
    }

    if (time.done) {
        return <p className="std-heading">It’s the day! 🎉</p>;
    }


    return (
        <div className="std-countdown">
            <div className="std-circles">
                <div className="std-circle animate-scale">
                    <div className="std-value">{time.days}</div>
                    <div className="std-label">{time.days === 1 ? "DAY" : "DAYS"}</div>
                </div>
                <div className="std-circle animate-scale">
                    <div className="std-value">{time.hours}</div>
                    <div className="std-label">{time.hours === 1 ? "HOUR" : "HOURS"}</div>
                </div>
                <div className="std-circle animate-scale">
                    <div className="std-value">{time.minutes}</div>
                    <div className="std-label">{time.minutes === 1 ? "MINUTE" : "MINUTES"}</div>
                </div>
                <div className="std-circle animate-scale">
                    <div className="std-value">{time.seconds}</div>
                    <div className="std-label">{time.seconds === 1 ? "SECOND" : "SECONDS"}</div>
                </div>
            </div>

            <p className="std-date">
                Save the date:{" "}
                {targetDate.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
            </p>


        </div>
    );
}
