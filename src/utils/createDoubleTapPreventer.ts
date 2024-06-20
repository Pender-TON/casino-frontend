/**
 * Function that prevents events triggered by double tapping - eg. Magnifier for iOS Safari
 * @param timeout_ms - timeout between taps
 */
export function createDoubleTapPreventer(timeout_ms: number) {
  let dblTapTimer: NodeJS.Timeout | null = null
  let dblTapPressed = false

  return function (e: TouchEvent) {
    if (dblTapTimer) clearTimeout(dblTapTimer)

    if (dblTapPressed) {
      e.preventDefault()
      dblTapPressed = false
    } else {
      dblTapPressed = true
      dblTapTimer = setTimeout(() => {
        dblTapPressed = false
      }, timeout_ms)
    }
  }
}
