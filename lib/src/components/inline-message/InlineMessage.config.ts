import * as React from "react"

import { Danger, Error, Info, OkCircle } from "@atom-learning/icons"

import { InlineMessageTheme } from "./InlineMessage.types"

import type { CSS } from '~/stitches'

export const INLINE_MESSAGE_THEMES: Record<InlineMessageTheme, CSS> = {
    success: { color: "$success" },
    warning: { color: "$warningText", "& svg": { color: "$warningDark" }}, 
    info: { color: "$primary" },
    neutral: { color: "$tonal400" },
    error: { color: "$danger" }
}

export const INLINE_MESSAGE_ICONS: Record<InlineMessageTheme, React.FC<React.SVGProps<SVGSVGElement>>> = {
    success: OkCircle,
    warning: Danger,
    info: Info,
    neutral: Info,
    error: Error
}