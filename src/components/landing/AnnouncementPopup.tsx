"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const STORAGE_KEY = "smarteg-migration-notice-dismissed"

export default function AnnouncementPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) dismiss() }}>
      <DialogContent
        className="border-primary-200 bg-primary-50 max-w-lg"
        showCloseButton={false}
      >
        <DialogTitle className="font-argesta text-primary-600 text-center text-xl">
          📢 Domain &amp; Email Migration Notice
        </DialogTitle>

        <p className="text-center text-sm text-gray-700">
          From <strong>July 24th, 2026</strong>, Smarteg will transition to new
          domains as <code className="text-primary-700">smarteg.app</code> will
          not be renewed:
        </p>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://smarteg.faizath.com"
              className="text-primary-600 underline hover:text-primary-800"
            >
              smarteg.faizath.com
            </a>{" "}
            <span className="text-gray-500">(formerly <em>smarteg.app</em>)</span>
          </li>
          <li>
            ⚙️ <strong>API:</strong>{" "}
            <a
              href="https://smarteg-api.faizath.com"
              className="text-primary-600 underline hover:text-primary-800"
            >
              smarteg-api.faizath.com
            </a>{" "}
            <span className="text-gray-500">(formerly <em>api.smarteg.app</em>)</span>
          </li>
          <li>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@smarteg.faizath.com"
              className="text-primary-600 underline hover:text-primary-800"
            >
              contact@smarteg.faizath.com
            </a>{" "}
            <span className="text-gray-500">(formerly <em>contact@smarteg.app</em>)</span>
          </li>
          <li>
            🛰️ <strong>CDN:</strong>{" "}
            <span className="text-primary-600">smarteg-cdn.faizath.com</span>{" "}
            <span className="text-gray-500">(formerly <em>cdn.smarteg.app</em>)</span>
          </li>
          <li>
            📈 <strong>Status Pages:</strong>{" "}
            <a
              href="https://status.faizath.com/status/smarteg"
              className="text-primary-600 underline hover:text-primary-800"
            >
              status.faizath.com/status/smarteg
            </a>{" "}
            <span className="text-gray-500">(formerly <em>status.smarteg.app</em>)</span>
          </li>
        </ul>

        <div className="flex justify-center pt-2">
          <button
            onClick={dismiss}
            className="bg-primary-500 hover:bg-primary-600 rounded-lg px-6 py-2 text-sm font-medium text-white transition-colors duration-200"
          >
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
