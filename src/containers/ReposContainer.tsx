import React, { SFC } from 'react'
import gql from 'graphql-tag'

import { Query } from 'react-apollo'
import withLoading from '@components/hoc/withLoading'
interface iOwnProps {}

/**
 * @author
 * @function @ReposContainer
 **/

const ReposContainer: SFC<iOwnProps> = props => {
  const renderRepos = (repos: Array<any>) => {
    return (
      <ul>
        {Object.keys(repos).map((i: any) => (
          <li key={repos[i].id}>
            <h2>{repos[i].name}</h2>
            {repos[i].description && <p>> {repos[i].description.toUpperCase()}</p>}
            <a href={repos[i].url}>> {repos[i].url}</a>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div>
      <h2>Repo's: </h2>
      <p>Using graphql and github for fetching all repo's</p>
      <Query query={REPOS_QUERY} variables={{}}>
        {({ data, loading }) =>
          loading ? <span>still loading....</span> : renderRepos(data.viewer.repositories.nodes)
        }
      </Query>
    </div>
  )
}

const REPOS_QUERY = gql`
  {
    viewer {
      repositories(last: 10, isFork: false) {
        nodes {
          id
          name
          description
          url
          languages(first: 5) {
            nodes {
              id
              color
              name
            }
          }
        }
      }
    }
  }
`
export default withLoading(ReposContainer)
