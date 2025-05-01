import Header from '@/components/Header'
import React, { useState } from 'react'

const Verify = () => {
    const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle')

    const handleVerify = () => {
        setStatus('verifying')
        setTimeout(() => {
            setStatus('success') // mock success for now
        }, 1000)
    }

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 px-6 pb-12 bg-gray-50">
                <section className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800">Verify a Certificate</h1>
                    <p className="mt-2 text-gray-600">
                        Enter the certificate code, upload a PDF, or scan a QR code to verify its authenticity.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* File Upload / Dropzone */}
                    <div className="border-2 border-dashed border-gray-300 h-[400px] flex flex-col items-center justify-center rounded-2xl bg-white shadow">
                        <input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="file-upload"
                            onChange={() => setStatus('idle')}
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-gray-500 text-center"
                        >
                            <p className="text-lg font-medium">Drag and drop a PDF here</p>
                            <p className="text-sm text-gray-400 mt-1">or click to browse files</p>
                        </label>
                    </div>

                    {/* QR Scan & Manual Code */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Scan QR Code</label>
                            <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                                {/* Placeholder for QR component */}
                                QR Scanner Placeholder
                            </div>
                        </div>

                        <div className="text-center text-gray-400 my-4">OR</div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
                            <input
                                type="text"
                                placeholder="e.g. RSU-2025-XYZ123"
                                className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                onClick={handleVerify}
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                                disabled={status === 'verifying'}
                            >
                                {status === 'verifying' ? 'Verifying...' : 'Verify Certificate'}
                            </button>

                            {status === 'success' && (
                                <div className="mt-4 text-green-600 text-sm text-center">
                                    ✅ Certificate verified successfully.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 text-red-600 text-sm text-center">
                                    ❌ Certificate not found. Please check the code or file.
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Verify
