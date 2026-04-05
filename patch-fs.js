/**
 * Patch fs.readlinkSync on Windows + Node.js v24 where it returns
 * EISDIR instead of EINVAL for non-symlink files.
 * This is a workaround for a known Node.js v24 / Windows bug.
 */
const fs = require('fs')
const originalReadlinkSync = fs.readlinkSync
fs.readlinkSync = function patchedReadlinkSync(path, options) {
  try {
    return originalReadlinkSync(path, options)
  } catch (err) {
    if (err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`)
      e.code = 'EINVAL'
      e.syscall = 'readlink'
      e.path = path
      throw e
    }
    throw err
  }
}
