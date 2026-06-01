import React, { useState } from "react";
import "../AccordionTable/AccordionTable.css";
export default function AccordionTablePreview({
    showCheckbox = true,
    showDropdown = true,
    showAvatar = true,
}) {
    const items = [
        {
            time: "09:30 AM",
            pack: "2h Pack",
            name: "Sudheer Karna",
            phone: "+91 9876543210",
            pc: "PC-5",
            gpu: "RTX 4070",
            status: "Active",
            price: "₹480/-",
        },
        {
            time: "11:00 AM",
            pack: "3h Pack",
            name: "Rohit Kumar",
            phone: "+91 9988776655",
            pc: "PC-2",
            gpu: "RTX 4080",
            status: "Running",
            price: "₹720/-",
        },
        {
            time: "11:00 AM",
            pack: "3h Pack",
            name: "Rohit Kumar",
            phone: "+91 9988776655",
            pc: "PC-2",
            gpu: "RTX 4080",
            status: "Running",
            price: "₹720/-",
        },
        {
            time: "11:00 AM",
            pack: "3h Pack",
            name: "Rohit Kumar",
            phone: "+91 9988776655",
            pc: "PC-2",
            gpu: "RTX 4080",
            status: "Running",
            price: "₹720/-",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);
    const handleToggle = (index) => {
        if (!showDropdown) return;
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleCheckbox = (e, index) => {
        e.stopPropagation();
        setCheckedItems((prev) => {
            if (prev.includes(index)) {
                return prev.filter((item) => item !== index);
            }
            return [...prev, index];
        });
    };
    const handleSelectAll = () => {
        if (checkedItems.length === items.length) {
            setCheckedItems([]);
        } else {
            setCheckedItems(items.map((_, i) => i));
        }
    };
    const gridColumns =
        showCheckbox || showDropdown
            ? "70px 180px 1.5fr 1fr 180px"
            : "180px 1.5fr 1fr 180px";
    return (
        <div className="tablewrapper">
            <div
                className="tablehead"
                style={{
                    gridTemplateColumns: gridColumns,
                }}
            >
                {(showCheckbox || showDropdown) && (
                    <div className="tableleft">
                        {showCheckbox && (
                            <div
                                onClick={handleSelectAll}
                                className={`checkbox ${checkedItems.length === items.length
                                    ? "checkboxActive"
                                    : ""
                                    }`}
                            >
                                {checkedItems.length === items.length
                                    ? "✓"
                                    : ""}
                            </div>
                        )}
                    </div>
                )}
                <div>Time</div>
                <div>User</div>
                <div>PC</div>
                <div>Status</div>
            </div>
            {/* ROWS */}
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className="tablerow"
                        style={{
                            gridTemplateColumns: gridColumns,
                            cursor: showDropdown
                                ? "pointer"
                                : "default",
                        }}
                        onClick={() => handleToggle(index)}
                    >
                        {(showCheckbox || showDropdown) && (
                            <div className="tableleft">
                                {/* CHECKBOX */}
                                {showCheckbox && (
                                    <div
                                        onClick={(e) =>
                                            handleCheckbox(e, index)
                                        }
                                        className={`checkbox ${checkedItems.includes(index)
                                            ? "checkboxActive"
                                            : ""
                                            }`}
                                    >
                                        {checkedItems.includes(index)
                                            ? "✓"
                                            : ""}
                                    </div>
                                )}
                                {/* ARROW */}
                                {showDropdown && (
                                    <div className="arrowBox">
                                        <div
                                            className="arrow"
                                            style={{
                                                transform:
                                                    activeIndex === index
                                                        ? "rotate(90deg)"
                                                        : "rotate(0deg)",
                                            }}
                                        >
                                            ›
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {/* TIME */}
                        <div>
                            <strong>{item.time}</strong>
                            <p className="subText">{item.pack}</p>
                        </div>
                        {/* USER */}
                        <div className="tableuser">
                            {showAvatar && (
                                <div className="tableavatar">
                                    {item.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                            )}
                            <div>
                                <h4>{item.name}</h4>
                                <p className="subText">
                                    {item.phone}
                                </p>
                            </div>
                        </div>
                        {/* PC */}
                        <div>
                            <h4>{item.pc}</h4>
                            <p className="subText">{item.gpu}</p>
                        </div>
                        {/* STATUS */}
                        <div>
                            <div className="userstatus">
                                <div className="statusdot"></div>
                                {item.status}
                            </div>
                        </div>
                    </div>
                    {/* DROPDOWN */}
                    <div
                        className="dropdownWrapper"
                        style={{
                            maxHeight:
                                showDropdown && activeIndex === index
                                    ? "500px"
                                    : "0px",
                            opacity:
                                showDropdown && activeIndex === index
                                    ? 1
                                    : 0,
                        }}
                    >
                        {showDropdown && (
                            <div className="dropdown">
                                {/* TOP */}
                                <div className="dropdownTop">
                                    <div className="dropdownLeft">
                                        <div>
                                            <h2 className="pcTitle">
                                                {item.pc}
                                            </h2>
                                            <p className="gpuText">
                                                {item.gpu}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="progressWrapper">
                                        <h3 className="progressTitle">
                                            1h 30m Left
                                        </h3>
                                        <div className="progressBar">
                                            <div className="progressFill"></div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        {item.price}
                                    </div>
                                </div>
                                {/* CARDS */}
                                <div className="cardGrid">
                                    <div className="card">
                                        <div className="cardTag">
                                            Sessions
                                        </div>
                                        <div className="cardRow">
                                            <span>Started:</span>
                                            <span>11:43 am</span>
                                        </div>
                                        <div className="cardRow">
                                            <span>Package:</span>
                                            <span>{item.pack}</span>
                                        </div>
                                        <div className="cardRow">
                                            <span>Time Left:</span>
                                            <span>1h 13m</span>
                                        </div>
                                        <div className="cardRow">
                                            <span>IP</span>
                                            <span>100.02.0320</span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="cardTag">
                                            Earning Today
                                        </div>
                                        <div className="depositTitle">
                                            Total money deposits
                                        </div>
                                        <div className="money">
                                            ₹ 480
                                        </div>
                                        <div className="successText">
                                            Across 3 Sessions Today.
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="cardTag">
                                            Recent Activity
                                        </div>
                                        <div className="activityItem">
                                            Order #SDS-2421
                                        </div>
                                        <div className="activityItem">
                                            Order #SDS-2421
                                        </div>
                                        <div className="activityItem">
                                            Session Started
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}