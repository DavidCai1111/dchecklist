import { PageHeader } from 'antd';

export default function AppJumbotron({ title }) {
  return (
    <PageHeader
      className="site-page-header"
      title="Hello,"
      subTitle={title}
    />
  )
}
