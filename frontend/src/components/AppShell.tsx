const pipelineSteps = [
  'PDF parsing',
  'Cleaning',
  'Chunking',
  'Embeddings',
  'Retrieval',
]

export function AppShell() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Local-first document QA
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-950">
              Production RAG
            </h1>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Frontend shell ready
          </div>
        </header>

        <section className="grid flex-1 gap-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <aside className="flex min-h-72 flex-col rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-slate-900">Documents</h2>
              <p className="mt-1 text-sm text-slate-500">
                Uploaded PDFs will appear here.
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center px-4 py-8 text-center">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  No documents uploaded yet
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Upload support comes after the backend ingestion endpoint.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4">
              <button
                className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-400"
                disabled
                type="button"
              >
                Upload PDF
              </button>
            </div>
          </aside>

          <section className="flex min-h-[520px] flex-col rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-950">
                Ask your documents
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Answers will be grounded in retrieved chunks with citations.
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center px-6 py-10 text-center">
              <div className="max-w-md">
                <p className="text-lg font-semibold text-slate-900">
                  Upload a PDF to begin asking grounded questions.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  This screen is intentionally static for now. Next steps will connect
                  upload, retrieval, and answer generation one layer at a time.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4">
              <div className="flex gap-2">
                <input
                  className="min-w-0 flex-1 rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-500 outline-none"
                  disabled
                  placeholder="Ask a question after uploading a document"
                  type="text"
                />
                <button
                  className="rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-slate-400"
                  disabled
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </section>

          <aside className="flex min-h-72 flex-col rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-slate-900">Sources</h2>
              <p className="mt-1 text-sm text-slate-500">
                Retrieved chunks will appear here.
              </p>
            </div>

            <div className="space-y-2 p-4">
              {pipelineSteps.map((step) => (
                <div
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                  key={step}
                >
                  {step}
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
