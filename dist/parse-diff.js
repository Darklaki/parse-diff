    var add, chunk, current, del, deleted_file, file, files, from_file, i, index, len, line, lines, ln_add, ln_del, new_file, noeol, normal, parse, restart, schema, start, to_file;
    current = null;
        chunks: [],
      if (!file || file.chunks.length) {
      var newLines, newStart, oldLines, oldStart;
      ln_del = oldStart = +match[1];
      oldLines = +(match[2] || 0);
      ln_add = newStart = +match[3];
      newLines = +(match[4] || 0);
      current = {
        content: line,
        changes: [],
        oldStart: oldStart,
        oldLines: oldLines,
        newStart: newStart,
        newLines: newLines
      };
      return file.chunks.push(current);
      current.changes.push({
      current.changes.push({
      return current.changes.push({