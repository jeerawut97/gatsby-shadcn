import * as React from "react"
import type { PageProps } from "gatsby"
import TableCustom from "@/components/common/table"
import DialogCustom from "@/components/common/dialog"


const pageStyles = {
  padding: 120,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <html>
        <head>
          <title>CashBook</title>
        </head>
        <body>
          <main style={pageStyles}>
            <DialogCustom />
            <TableCustom />
          </main>
        </body>
      </html>
    </>
  )
}

export default IndexPage;
