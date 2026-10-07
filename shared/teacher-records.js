(function () {
  const BACKUP_KEY = "miniGameTeacherRecordsBackupV1";

  function cfg() {
    return window.TEACHER_RECORDS_CONFIG || { enabled: false, endpoint: "" };
  }

  function makeAttemptId() {
    try {
      if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    } catch (_) {}
    return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function backup(payload) {
    try {
      const rows = JSON.parse(localStorage.getItem(BACKUP_KEY) || "[]");
      rows.unshift(payload);
      localStorage.setItem(BACKUP_KEY, JSON.stringify(rows.slice(0, 100)));
    } catch (_) {}
  }

  async function submit(input) {
    const payload = {
      studentName: String(input.studentName || "").trim(),
      classCode: String(input.classCode || "").trim(),
      gameTitle: String(input.gameTitle || document.title || "Mini Game").trim(),
      score: Number(input.score || 0),
      total: Number(input.total || 0),
      durationSeconds: Number(input.durationSeconds || 0),
      completedAt: input.completedAt || new Date().toISOString(),
      attemptId: input.attemptId || makeAttemptId(),
      gameUrl: input.gameUrl || location.href
    };

    backup(payload);

    const c = cfg();
    if (!c.enabled || !c.endpoint) return { sent: false, reason: "not_configured", payload };

    try {
      await fetch(c.endpoint, {
        method: "POST",
        mode: "no-cors",
        cache: "no-store",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(payload)
      });
      return { sent: true, payload };
    } catch (error) {
      return { sent: false, reason: "network_error", error, payload };
    }
  }

  window.TeacherRecords = { submit };
})();
