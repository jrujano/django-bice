from rest_framework import pagination, response


class CustomPagination(pagination.PageNumberPagination):
  page_size = 15
  page_size_query_param = 'per_page'

  # max_page_size = 100

  # Paginate in the style defined by vuetable2
  def get_paginated_response(self, data):

    # Get id's of records in current page
    # firstRecord = data[0]['id'] if (data and 'id' in data[0]) else None
    # lastRecord = data[-1]['id'] if (data and 'id' in data[0]) else None

    if self.request.query_params.get('page') is None:
      current_page = 1
    else:
      current_page = self.request.query_params.get('page')

    return response.Response({
      'pagination': {
        'total': self.page.paginator.count,
        'per_page': self.get_page_size(self.request),
        'current_page': int(current_page),
        'last_page': self.page.paginator.num_pages,
        'next_page_url': self.get_next_link(),
        'previous_page_url': self.get_previous_link(),
        # 'first': firstRecord,
        # 'last': lastRecord,
      },
      'results': data
    })
