import { useState } from "react";

export default function PaymentPage() {
    const [amount, setAmount] = useState("");

    // Personal Info State
    const [form, setForm] = useState({
        fullName: "",
        gender: "",
        nationality: "",
        email: "",
        passport: "",
        nationalId: "",
        license: "",
        country: "",
        subcity: "",
        woreda: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const payTelebirr = async () => {
        if (!amount) return alert("Enter amount");

        const res = await fetch("/api/create-telebirr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: amount,
                orderId: "ORD-" + Date.now(),
                customer: form, // ✅ send personal info
            }),
        });

        const data = await res.json();
        window.location.href = data.url;
    };

    const payCBE = async () => {
        if (!amount) return alert("Enter amount");

        const res = await fetch("/api/create-cbe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: amount,
                orderId: "ORD-" + Date.now(),
                customer: form,
            }),
        });

        const data = await res.json();
        window.location.href = data.url;
    };

    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto p-6">
             {/* RIGHT - PERSONAL INFO */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input name="fullName" onChange={handleChange} placeholder="Full Name" className="border p-3 rounded-lg" />

                    <select name="gender" onChange={handleChange} className="border p-3 rounded-lg">
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <input name="nationality" onChange={handleChange} placeholder="Nationality" className="border p-3 rounded-lg" />

                    <input name="email" onChange={handleChange} placeholder="Email Address" className="border p-3 rounded-lg" />

                    <input name="nationalId" onChange={handleChange} placeholder="National ID Number" className="border p-3 rounded-lg" />

                    <input name="country" onChange={handleChange} placeholder="Country / Region" className="border p-3 rounded-lg" />

                    <input name="subcity" onChange={handleChange} placeholder="Subcity" className="border p-3 rounded-lg" />

                    <input name="woreda" onChange={handleChange} placeholder="Woreda" className="border p-3 rounded-lg" />

                    {/* full width for phone */}
                    <input
                        name="phone"
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="border p-3 rounded-lg md:col-span-2"
                    />

                </div>
            </div>

            {/* LEFT - PAYMENT */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">Make Payment</h2>

                <input
                    type="number"
                    placeholder="Enter amount (ETB)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-4"
                />

                <button
                    onClick={payTelebirr}
                    className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-lg font-semibold mb-4 hover:bg-blue-500 hover:text-white transition"
                >
                    Pay with Telebirr
                </button>

                <button
                    onClick={payCBE}
                    className="w-full bg-yellow-400 py-3 rounded-lg font-bold text-blue-800 hover:opacity-90 transition"
                >
                    Pay with CBE
                </button>
            </div>

           

        </div>
    );
}